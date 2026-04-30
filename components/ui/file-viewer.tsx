"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Check,
  Copy,
  FileCode,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface ApiComponent {
  name: string;
  version: string;
  files: Array<{ path: string; content?: string }>;
}

interface TreeViewElement {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
}

interface TreeContextProps {
  selectedId: string | undefined;
  expandedItems: string[] | undefined;
  handleExpand: (id: string) => void;
  selectItem: (id: string) => void;
  setExpandedItems?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  indicator: boolean;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  direction: "rtl" | "ltr";
}

const TreeContext = createContext<TreeContextProps | null>(null);
const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) throw new Error("useTree must be used within a TreeProvider");
  return context;
};

// --- Simple Code Viewer (no external deps) ---
function CodeViewer({
  code,
  className,
}: {
  code: string;
  lang?: string;
  showLineNumbers?: boolean;
  className?: string;
}) {
  const lines = code.split("\n");
  return (
    <div className={cn("overflow-auto", className)}>
      <pre className="p-4 text-xs font-mono leading-relaxed text-slate-300 bg-transparent">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4 min-h-6">
            <span className="select-none min-w-10 text-right text-slate-600 text-xs">
              {i + 1}
            </span>
            <code className="text-slate-200 whitespace-pre">{line}</code>
          </div>
        ))}
      </pre>
    </div>
  );
}

// --- File Header ---
// --- Tree Indicator ---
function TreeIndicator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("absolute left-1.5 h-full w-px rounded-md bg-slate-700 py-3 transition-colors", className)}
      {...props}
    />
  );
}

// --- Folder ---
function Folder({
  element, value, isSelectable = true, isSelect, children, className,
}: {
  element: string; value: string; isSelectable?: boolean; isSelect?: boolean;
  children: React.ReactNode; className?: string;
}) {
  const { handleExpand, expandedItems, indicator, openIcon, closeIcon } = useTree();
  return (
    <AccordionPrimitive.Item value={value} className="relative h-full overflow-hidden">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex items-center gap-1 rounded-md text-sm px-2 py-1 hover:bg-slate-800 hover:text-white cursor-pointer text-slate-400 w-full text-left",
          isSelect && isSelectable && "bg-slate-800 text-white",
          !isSelectable && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={!isSelectable}
        onClick={() => handleExpand(value)}
      >
        {expandedItems?.includes(value)
          ? openIcon ?? <FolderOpenIcon className="h-4 w-4 text-[#5ba8d8] shrink-0" />
          : closeIcon ?? <FolderIcon className="h-4 w-4 text-[#5ba8d8] shrink-0" />}
        <span className="truncate">{element}</span>
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content className="relative h-full overflow-hidden text-sm">
        {indicator && <TreeIndicator />}
        <AccordionPrimitive.Root type="multiple" className="ml-5 flex flex-col gap-1 py-1" value={expandedItems}>
          {children}
        </AccordionPrimitive.Root>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

// --- File node ---
function File({
  value, isSelectable = true, isSelect, fileIcon, children, className, onClick,
}: {
  value: string; isSelectable?: boolean; isSelect?: boolean;
  fileIcon?: React.ReactNode; children: React.ReactNode;
  className?: string; onClick?: () => void;
}) {
  const { selectedId, selectItem } = useTree();
  const isSelected = isSelect ?? selectedId === value;
  return (
    <button
      disabled={!isSelectable}
      className={cn(
        "flex w-full items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors cursor-pointer text-slate-400",
        isSelected && isSelectable && "bg-slate-800 text-white",
        !isSelectable ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-800 hover:text-white",
        className
      )}
      onClick={() => { selectItem(value); onClick?.(); }}
    >
      {fileIcon ?? <FileIcon className="h-4 w-4 text-slate-500 shrink-0" />}
      <span className="truncate">{children}</span>
    </button>
  );
}

// --- Tree ---
function Tree({
  elements, initialSelectedId, initialExpandedItems, children, className,
  indicator = true, openIcon, closeIcon, dir = "ltr",
}: {
  elements?: TreeViewElement[]; initialSelectedId?: string;
  initialExpandedItems?: string[]; children: React.ReactNode;
  className?: string; indicator?: boolean; openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode; dir?: "rtl" | "ltr";
}) {
  const [selectedId, setSelectedId] = useState<string | undefined>(initialSelectedId);

  const getAllExpandableItems = (els?: TreeViewElement[]): string[] => {
    const out: string[] = [];
    const traverse = (items: TreeViewElement[]) => {
      items.forEach((item) => { if (item.children?.length) { out.push(item.id); traverse(item.children); } });
    };
    if (els) traverse(els);
    return out;
  };

  const [expandedItems, setExpandedItems] = useState<string[] | undefined>(
    () => initialExpandedItems ?? (elements ? getAllExpandableItems(elements) : undefined)
  );

  const selectItem = useCallback((id: string) => setSelectedId(id), []);
  const handleExpand = useCallback((id: string) => {
    setExpandedItems((prev) =>
      prev?.includes(id) ? prev.filter((item) => item !== id) : [...(prev ?? []), id]
    );
  }, []);

  return (
    <TreeContext.Provider value={{ selectedId, expandedItems, handleExpand, selectItem, setExpandedItems, indicator, openIcon, closeIcon, direction: dir }}>
      <div className={cn("size-full", className)}>
        <div className="relative h-full px-2">
          <AccordionPrimitive.Root type="multiple" value={expandedItems} className="flex flex-col gap-1">
            {children}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </TreeContext.Provider>
  );
}

// --- TreeItem ---
function TreeItem({ item, selectedFile, onFileSelect }: {
  item: TreeViewElement; selectedFile?: string; onFileSelect: (f: string) => void;
}) {
  if (item.children?.length) {
    return (
      <Folder key={item.id} element={item.name} value={item.id} className="truncate">
        {item.children.map((child) => (
          <TreeItem key={child.id} item={child} selectedFile={selectedFile} onFileSelect={onFileSelect} />
        ))}
      </Folder>
    );
  }
  return (
    <File
      key={item.id}
      value={item.id}
      onClick={() => onFileSelect(item.id)}
      isSelectable
      isSelect={selectedFile === item.id}
      className="truncate whitespace-nowrap"
    >
      {item.name}
    </File>
  );
}

// --- Main component ---
type RawNode = {
  id: string;
  name: string;
  isSelectable: boolean;
  children?: Record<string, RawNode>;
  path?: string;
  content?: string;
};

export default function ComponentFileViewer({ component }: { component: ApiComponent }) {
  const files = component.files.filter((f) => f.content);
  const [selectedFile, setSelectedFile] = useState<string | undefined>(
    () => files[0]?.path
  );
  const [copied, setCopied] = useState(false);

  const tree = useMemo(() => {
    const root: Record<string, RawNode> = {};
    for (const file of files) {
      const parts = file.path.split("/");
      let current = root;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!current[part]) {
          current[part] =
            i === parts.length - 1
              ? { ...file, id: file.path, name: part, isSelectable: true }
              : { id: parts.slice(0, i + 1).join("/"), name: part, children: {}, isSelectable: false };
        }
        current = (current[part].children ?? current[part]) as Record<string, RawNode>;
      }
    }
    const toArray = (obj: Record<string, RawNode>): TreeViewElement[] =>
      Object.values(obj).map((item) =>
        item.children
          ? { id: item.id, name: item.name, isSelectable: item.isSelectable, children: toArray(item.children) }
          : { id: item.id, name: item.name, isSelectable: item.isSelectable }
      );
    return toArray(root);
  }, [files]);

  const allExpandableItems = useMemo(() => {
    const out: string[] = [];
    const traverse = (els: TreeViewElement[]) => {
      els.forEach((el) => { if (el.children?.length) { out.push(el.id); traverse(el.children); } });
    };
    traverse(tree);
    return out;
  }, [tree]);

  const selected = files.find((f) => f.path === selectedFile) ?? files[0];

  const handleCopy = () => {
    if (selected?.content) {
      navigator.clipboard.writeText(selected.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex rounded-xl border border-slate-700 overflow-hidden bg-slate-950" style={{ height: "520px" }}>
      {/* File tree — fixed width */}
      <div className="w-64 shrink-0 flex flex-col border-r border-slate-700">
        <div className="shrink-0 px-3 py-2.5 border-b border-slate-700 flex items-center gap-2">
          <FileCode className="h-4 w-4 text-[#5ba8d8] shrink-0" />
          <span className="text-xs font-medium text-slate-300 truncate">{component.name}</span>
          <Badge variant="outline" className="ml-auto text-[10px] border-slate-600 text-slate-500 shrink-0">{component.version}</Badge>
        </div>
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-2">
              <Tree elements={tree} initialExpandedItems={allExpandableItems} initialSelectedId={selectedFile} indicator>
                {tree.map((item) => (
                  <TreeItem key={item.id} item={item} selectedFile={selectedFile} onFileSelect={setSelectedFile} />
                ))}
              </Tree>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Code viewer — fills remaining space */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selected && (
          <>
            <div className="shrink-0 flex items-center justify-between px-3 py-1.5 border-b border-slate-700 bg-slate-900/80">
              <div className="flex items-center gap-2 min-w-0">
                <Badge variant="outline" className="text-xs border-slate-600 text-slate-400 shrink-0">
                  {selected.path.split(".").pop()?.toUpperCase() ?? "TXT"}
                </Badge>
                <span className="text-xs text-slate-400 truncate">{selected.path}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="shrink-0 cursor-pointer h-8 w-8 p-0 text-slate-400 hover:text-white"
                title="Copiar contenido"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <CodeViewer code={selected.content ?? ""} />
              </ScrollArea>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
