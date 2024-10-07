import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface CardItemProps {
    title: string;
    count: string;
    icon: LucideIcon;
    iconColor: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, count, icon: Icon, iconColor }) => (
    <Card>
        <CardContent className="flex items-center justify-between p-6">
            <div className="space-y-1">
                <CardTitle className="text-2xl font-bold">{count}</CardTitle>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
            <Icon className={`h-8 w-8 ${iconColor}`} />
        </CardContent>
    </Card>
);

export default CardItem;
