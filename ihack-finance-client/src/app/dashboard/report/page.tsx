"use client"
import React from 'react';
import "../../style/report.css"
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import ReportCard from '../../components/reportCard';
import { BurgerNav } from '@/app/components/BurgerNav/BurgerNav';
import Header from '@/app/components/Header/Header';

const data = [
    {
        category: 'Category 1',
        currentData: 10,
        lastData: 8,
        recommendation: 'Increase investment',
    },
    {
        category: 'Category 2',
        currentData: 5,
        lastData: 6,
        recommendation: 'Decrease investment',
    },
    {
        category: 'Category 3',
        currentData: 12,
        lastData: 12,
        recommendation: 'Maintain investment',
    },
];

const Page = () => {
    return (
        <div>
            <Header number={2} />

            <div className='headerSection'>
                <h1>Page Header</h1>
                <div className='chartWrap'>
                    <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
                </div>
            </div>
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <ReportCard
                            category={item.category}
                            data={item.currentData}
                            lastData={item.lastData}
                            recommendation={item.recommendation}
                        />
                        <div className='separator'/>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Page;
