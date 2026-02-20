'use client';

import { Card } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const speedData = [
  { name: 'SQ Pro', read: 7000, write: 6500 },
  { name: 'Competitor A', read: 5500, write: 5200 },
  { name: 'Competitor B', read: 4800, write: 4500 },
  { name: 'Competitor C', read: 4200, write: 3900 },
];

const iopData = [
  { name: 'Random Read', value: 500 },
  { name: 'Random Write', value: 480 },
  { name: 'Seq Read', value: 700 },
  { name: 'Seq Write', value: 650 },
];

const lifespan = [
  { year: 'Year 1', reliability: 99.9, health: 100 },
  { year: 'Year 2', reliability: 99.8, health: 98 },
  { year: 'Year 3', reliability: 99.7, health: 95 },
  { year: 'Year 5', reliability: 99.6, health: 89 },
  { year: 'Year 7', reliability: 99.5, health: 82 },
  { year: 'Year 10', reliability: 99.4, health: 75 },
];

export default function PerformanceMetrics() {
  return (
    <section id="performance" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Benchmark Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Storixa Quantum leads the industry in speed, reliability, and longevity
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Speed Comparison */}
          <Card className="p-8 bg-card/80">
            <h3 className="text-xl font-bold text-foreground mb-6">Sequential Speed (MB/s)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={speedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15,15,15,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="read" fill="hsl(var(--color-accent))" />
                <Bar dataKey="write" fill="hsl(var(--color-primary))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* IOPS Performance */}
          <Card className="p-8 bg-card/80">
            <h3 className="text-xl font-bold text-foreground mb-6">IOPS Performance (K ops/sec)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={iopData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" stroke="rgba(255,255,255,0.5)" />
                <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.5)" width={120} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15,15,15,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="hsl(var(--color-accent))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Reliability Over Time */}
          <Card className="p-8 bg-card/80 md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-6">Long-Term Reliability & Health</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lifespan}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15,15,15,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="reliability" stroke="hsl(var(--color-accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--color-accent))' }} />
                <Line type="monotone" dataKey="health" stroke="hsl(var(--color-primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--color-primary))' }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Enterprise-Grade Quality',
              description: 'Manufacturing tested to the highest standards with 0.1% defect rate',
            },
            {
              title: '10-Year Warranty',
              description: 'Industry-leading coverage with 24/7 dedicated support',
            },
            {
              title: 'Thermal Efficiency',
              description: 'Advanced cooling design keeps temperatures 15° cooler under load',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="p-6 bg-card/80 border border-accent/10 hover:border-accent/30 transition-colors">
              <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
