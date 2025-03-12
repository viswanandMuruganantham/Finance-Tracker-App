import mongoose from "mongoose";

const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number, // Store in cents
      required: true,
      get: (v) => (v / 100).toFixed(2), // Convert to dollars
      set: (v) => Math.round(v * 100), // Convert to cents
    },
    expenses: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
    expenses: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
    operationalExpenses: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
    nonOperationalExpenses: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
    totalRevenue: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
    totalExpenses: {
      type: Number,
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        get: (v) => (v / 100).toFixed(2),
        set: (v) => Math.round(v * 100),
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
