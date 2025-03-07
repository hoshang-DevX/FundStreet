import { useState } from "react";
import { Slider, Tabs, Tab } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const SIPCalculator = () => {
  const [investment, setInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(5);
  const [tab, setTab] = useState(0); // 0 for SIP, 1 for Lumpsum

  const months = years * 12;
  const monthlyRate = returnRate / 100 / 12;

  // SIP Calculation
  const investedAmountSIP = investment * months;
  const futureValueSIP =
    investment * ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) / monthlyRate;
  const estimatedReturnsSIP = futureValueSIP - investedAmountSIP;

  // Lumpsum Calculation
  const futureValueLumpsum = investment * Math.pow(1 + returnRate / 100, years);
  const estimatedReturnsLumpsum = futureValueLumpsum - investment;

  // Dynamic Data based on Selected Tab
  const investedAmount = tab === 0 ? investedAmountSIP : investment;
  const estimatedReturns = tab === 0 ? estimatedReturnsSIP : estimatedReturnsLumpsum;
  const futureValue = investedAmount + estimatedReturns;

  const data = [
    { name: "Invested", value: investedAmount, color: "#0088FE" },
    { name: "Returns", value: estimatedReturns, color: "#00C49F" },
  ];

  return (
    <div className="bg-slate-50 p-3 sm:p-4 rounded-lg shadow-md w-full max-w-md mx-auto">
      {/* Tab Navigation */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        centered
        variant="fullWidth"
        className="text-xs sm:text-sm"
      >
        <Tab label="SIP" />
        <Tab label="Lumpsum" />
      </Tabs>

      {/* Investment Input */}
      <div className="mt-3">
        <label className="block font-semibold text-xs sm:text-sm">
          {tab === 0 ? "SIP Investment" : "Lumpsum Investment"}
        </label>
        <Slider
          value={investment}
          min={500}
          max={50000}
          step={500}
          onChange={(e, val) => setInvestment(val)}
          className="w-full sm:w-[80%] mx-auto"
        />
        <div className="text-right text-xs">₹ {investment.toLocaleString()}</div>
      </div>

      {/* Expected Return Rate */}
      <div className="mt-3">
        <label className="block font-semibold text-xs sm:text-sm">Expected Return Rate (p.a)</label>
        <Slider
          value={returnRate}
          min={5}
          max={20}
          step={0.5}
          onChange={(e, val) => setReturnRate(val)}
          className="w-full sm:w-[80%] mx-auto"
        />
        <div className="text-right text-xs">{returnRate} %</div>
      </div>

      {/* Time Period */}
      <div className="mt-3">
        <label className="block font-semibold text-xs sm:text-sm">Time Period</label>
        <Slider
          value={years}
          min={1}
          max={30}
          step={1}
          onChange={(e, val) => setYears(val)}
          className="w-full sm:w-[80%] mx-auto"
        />
        <div className="text-right text-xs">{years} Yr</div>
      </div>

      {/* Calculation Results */}
      <div className="mt-3 text-center">
        <p className="font-semibold text-xs sm:text-sm">Invested: ₹{investedAmount.toLocaleString()}</p>
        <p className="font-semibold text-xs sm:text-sm">Returns: ₹{estimatedReturns.toLocaleString()}</p>
        <p className="font-bold text-sm sm:text-lg">Total: ₹{futureValue.toLocaleString()}</p>
      </div>

      {/* Investment Pie Chart */}
      <div className="mt-4 flex flex-col items-center">
        <h3 className="font-bold text-xs sm:text-sm mb-2">Investment Overview</h3>
        <PieChart width={200} height={200} className="sm:w-48 sm:h-48">
          <Pie data={data} cx="50%" cy="50%" outerRadius={70} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default SIPCalculator;