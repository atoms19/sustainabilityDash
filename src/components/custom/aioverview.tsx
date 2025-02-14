"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aiChat } from "@/lib/ai";
import { useState } from "react";
import {parse} from 'marked'


const AiOverView= () => {

  const [insights,setInsights] = useState([])
    generateAIResponse(setInsights)

  return (
    <Card className="shadow-lg bg-gradient-to-r from-red-400 to-blue-300 text-black/60 rounded-xl">
      <CardHeader>
        <CardTitle>AI-Powere d Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white bg-opacity-50 rounded-xl p-4">
        <ul className="space-y-2 mt-3">
          {insights.map((insight, index) => (
            <li key={index} className="text-md prose" dangerouslySetInnerHTML={{__html:parse(insight.message.content)}}>
            
            </li>
          ))}
        </ul>
        </div>

      </CardContent>
    </Card>
  );
};


async function generateAIResponse(insightSetter:Function){


  let s=await aiChat("A company produced 1000kg of waste and 1 tons tco2e/$million emmission in the last month ,tell if its sustainable considering the fact that the goal of the company is to reduce to 2teco2e/$million and waste to 200kg give recommendations for the company to do so if do so ")
  insightSetter([s.choices[0]])
}

export default AiOverView;
