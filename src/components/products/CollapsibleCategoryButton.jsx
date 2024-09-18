"use client";

import * as React from "react";
import {
  ChevronDown,
  ChevronsUp,
  ChevronsUpDown,
  ChevronUp,
  Plus,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibaleCategoryButton({
  category,
  subcategory,
  openId,
  setOpenId,
  id,
}) {
  return (
    <Collapsible
      open={openId === id}
      onOpenChange={() => setOpenId(openId === id ? null : id)}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{category}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0">
            {openId === id ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {subcategory.map((sub, id) => (
          <div
            key={id}
            className="rounded-md border px-4 py-3 font-mono text-sm"
          >
            {sub.name}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
