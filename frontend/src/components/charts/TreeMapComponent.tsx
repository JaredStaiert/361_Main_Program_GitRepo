import {ResponsiveContainer, Treemap} from "recharts";
import type {TreemapNode} from "recharts/types/chart/Treemap";

function TreeMapComponent() {
    const data = [
        {
            name: 'axis',
            children: [
                { name: 'Axis', size: 24593 },
            ],
        },
        {
            name: 'controls',
            children: [
                { name: 'TooltipControl', size: 8435 },
            ],
        },
        {
            name: 'data',
            children: [
                { name: 'Data', size: 20544 },
                {
                    name: 'render',
                    children: [
                        { name: 'EdgeRenderer', size: 5569 },
                        { name: 'ShapeRenderer', size: 2247 },
                        { name: 'ArrowType', size: 698 },
                        { name: 'IRenderer', size: 353 },
                    ],
                },
            ],
        },
        {
            name: 'events',
            children: [
                { name: 'DataEvent', size: 7313 },
            ],
        },
        {
            name: 'legend',
            children: [
                { name: 'Legend', size: 20859 },
            ],
        },
        {
            name: 'operator',
            children: [
                {
                    name: 'distortion',
                    children: [
                        { name: 'Distortion', size: 6314 },
                    ],
                },
                {
                    name: 'encoder',
                    children: [
                        { name: 'PropertyEncoder', size: 4138 },
                    ],
                },
                {
                    name: 'filter',
                    children: [
                        { name: 'FisheyeTreeFilter', size: 5219 },
                    ],
                },
                { name: 'IOperator', size: 1286 },
                {
                    name: 'label',
                    children: [
                        { name: 'Labeler', size: 9956 },
                    ],
                },
                {
                    name: 'layout',
                    children: [
                        { name: 'RadialTreeLayout', size: 12348 },
                    ],
                },
                { name: 'OperatorList', size: 5248 },
                { name: 'OperatorSequence', size: 4190 },
                { name: 'OperatorSwitch', size: 2581 },
                { name: 'Operator', size: 2490 },
                { name: 'SortOperator', size: 2023 },
            ],
        },
    ];


    return (
        <ResponsiveContainer width={"25%"} aspect={4 / 3}>
            <Treemap
                style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 4 / 3 }}
                data={data}
                dataKey="size"
                stroke="#fff"
                fill="#8884d8"
                content={CustomizedContent}
                isAnimationActive={false}
            />
        </ResponsiveContainer>
    );
}

export default TreeMapComponent;


const CustomizedContent = (props: TreemapNode) => {
    const { root, depth, x, y, width, height, index, name } = props;
    const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: depth < 2 ? COLORS[Math.floor((index / root.children.length) * 6)] : '#ffffff00',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {depth === 1 ? (
                <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={24}>
                    {name}
                </text>
            ) : null}
            {depth === 1 ? (
                <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                    {index + 1}
                </text>
            ) : null}
        </g>
    );
};