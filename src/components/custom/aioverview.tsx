import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insights = [
  "Reduce HVAC usage by 10% to save 150 kWh this month.",
  "Consider switching to energy-efficient appliances to cut CO₂ emissions.",
  "Implement a waste segregation system to increase recycling efficiency.",
];

const AiOverView= () => {
  return (
    <Card className="shadow-lg bg-gradient-to-r from-red-400 to-blue-300 text-black/60 rounded-xl">
      <CardHeader>
        <CardTitle>AI-Powered Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mt-3">
          {insights.map((insight, index) => (
            <li key={index} className="text-md">
              {insight}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AiOverView;
