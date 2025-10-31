import type {JSX} from "react";
import CalculatorSimple from "./tool_components/CalculatorSimple.tsx";
import CalculatorInterest from "./tool_components/CalculatorInterest.tsx";

export interface OverviewCardProps {
    title: string;
    components: JSX.Element[];
    pageLink: string;
}

export const ToolWidgetComponents = {
    Simple: CalculatorSimple,
    Interest: CalculatorInterest,
} as const;

export type ToolWidgetType = keyof typeof ToolWidgetComponents;

export interface ToolWidgetTool {
    id: ToolWidgetType;
    type: ToolWidgetType;
    props?: Record<string, any>;
}
