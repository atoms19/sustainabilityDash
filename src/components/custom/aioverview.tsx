"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aiChat } from "@/lib/ai";
import { useEffect, useState } from "react";
import { parse } from "marked";

const AiOverView = () => {
  const [insights, setInsights] = useState("");

  useEffect(() => {
    generateAIResponse(setInsights);
  }, []);

  return (
    <Card className="shadow-lg bg-gradient-to-r from-red-400 to-blue-300 text-black/60 rounded-xl">
      <CardHeader>
        <CardTitle>AI-Powered Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white bg-opacity-50 rounded-xl p-4">
          {/* <div className="text-md prose" dangerouslySetInnerHTML={{__html:parse()}}>   </div> */}
          <div>{insights}</div>
        </div>
      </CardContent>
    </Card>
  );
};

async function generateAIResponse(insightSetter: Function) {
  let s = await aiChat(
    "A company produced 1000kg of waste and 1 tons tco2e/$million emmission in the last month ,tell if its sustainable considering the fact that the goal of the company is to reduce to 2teco2e/$million and waste to 200kg give recommendations for the company to do so if do so "
  );
  insightSetter(s.choices[0].message.content);
}

export default AiOverView;
