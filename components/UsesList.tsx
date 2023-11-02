import React from 'react';
import { uses } from '@/lib/uses';
import { Card, CardContent, CardHeader } from './ui/card';

export default function UsesList() {
    return (
        <div className="grid grid-cols-6 gap-3">
            {uses.map((item) => (
                <Card className="flex flex-col items-center justify-center hover:shadow-lg hover:shadow-indigo-400/70 transition-all duration-300">
                    <CardHeader>{item.icon}</CardHeader>
                    <CardContent className="text-lg">{item.name}</CardContent>
                </Card>
            ))}
        </div>
    );
}
