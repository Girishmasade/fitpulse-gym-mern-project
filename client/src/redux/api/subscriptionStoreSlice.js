import { createSlice } from "@reduxjs/toolkit";

const SubscriptionPlans = [
    {   name: "Basic Fitness",
        description: "Perfect for getting started with your fitness journey.",
        monthlyPlan: 29,
        yearlyPlan: 290,
        features: [
            "Gym access during off-peak hours (6AM-3PM)",
            "Locker room and shower facilities",
            "Free fitness assessment",
            "Access to basic cardio and strength equipment",
            "Mobile app with basic tracking",
            "Access to group fitness classes (limited)"
        ]
    },
      { name: "Premium",
        description: "The complete gym experience with personal training.",
        monthlyPlan: 59,
        yearlyPlan: 590,
        features: [
            "4/7 unlimited gym access",
            "Unlimited group fitness classes",
            "Nutrition consultation and meal planning",
            "Guest passes (2 per month)",
            "Access to all equipment and facilities",
            "1 personal training session per month",
            "Premium app features with detailed analytics",
            "Access to sauna and steam room"
        ]
    },
    { name: "Elite",
        description: "Ultimate fitness experience with VIP treatment.",
        monthlyPlan: 99,
        yearlyPlan: 990,
        features: [
            "Everything in Premium plan",
            "VIP locker room access",
            "Customized meal prep service",
            "Unlimited guest passes",
            "Quarterly body composition analysis",
            "Unlimited personal training sessions",
            "Massage and recovery services",
            "Priority class booking",
            "Access to exclusive VIP area"
        ]
    },
]

const subscriptionStoreSlice = createSlice({
    name: "subscriptionStore",
    initialState: {
        subscription: SubscriptionPlans,
        period: 'monthly' || 'yearly',
        history: [],
        paymentMethod: null,
        currentPlan: null
    },

    reducers: {
        setSubscription: (state, actions) => {
            state.subscription = actions.payload
        },
        setPeriod: (state, actions) => {
            state.period = actions.payload
        },
        setHistory: (state, actions) => {
            state.history = actions.payload
        },
        setPaymentMethod: (state, actions) => {
            state.paymentMethod = actions.payload
            state.history.push(actions.payload);
        },
        setCurrentPlan: (state, actions) => {
            state.currentPlan = actions.payload
            state.history.push(actions.payload);
         },
    }
})

export const { setSubscription, setPeriod, setHistory, setPaymentMethod, setCurrentPlan } = subscriptionStoreSlice.actions;
export default subscriptionStoreSlice.reducer;