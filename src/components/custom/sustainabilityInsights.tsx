import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insights = [
  "Reduce HVAC usage by 10% to save 150 kWh this month.",
  "Consider switching to energy-efficient appliances to cut CO₂ emissions.",
  "Implement a waste segregation system to increase recycling efficiency.",
];

const SustainabilityInsights = () => {
  return (
    <Card className="shadow-lg rounded-xl">
      <CardHeader>
        <CardTitle>AI-Powered Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="text-sm">
              {insight}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SustainabilityInsights;
