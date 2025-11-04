import CalculatorSimple from "./tool_components/CalculatorSimple.tsx";
import CalculatorInterest from "./tool_components/CalculatorInterest.tsx";
import TreeMapComponent from "./charts/TreeMapComponent.tsx";
import TestStockTickerTable from "./charts/TestStockTickerTable.tsx";

export const OverviewComponents = {
    TreeMap: TreeMapComponent,
    StockTable: TestStockTickerTable,
} as const;

export type OverviewComponentType = keyof typeof OverviewComponents;

export interface OverviewCompDesc {
    id: string;
    type: OverviewComponentType;
    props?: Record<string, unknown>;
}

export const ToolWidgetComponents = {
    Simple: CalculatorSimple,
    Interest: CalculatorInterest,
} as const;

export type ToolWidgetType = keyof typeof ToolWidgetComponents;

export interface ToolWidgetDesc {
    id: ToolWidgetType;
    type: ToolWidgetType;
    props?: Record<string, any>;
}
