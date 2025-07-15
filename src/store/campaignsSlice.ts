import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import initialData from '../assets/data/campaigns.json';

export interface CampaignState {
    id?: string;
    Campaign: string;
    Status?: string;
    Payment_model?: string;
    Spendings?: string;
    Impressions?: string;
    Clicks?: string;
    CTR?: string;
}

export interface CampaignsState {
    campaigns: CampaignState[];
}
const initialState: CampaignsState = {
    campaigns: initialData,
};

export const campaignsSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers: {
        addCampaign: (state, action: PayloadAction<CampaignState>) => {
            state.campaigns.push({
                id: new Date().toISOString(),
                Campaign: action.payload.Campaign,
                Status: action.payload.Status ?? '',
                Payment_model: action.payload.Payment_model ?? '',
                Spendings: action.payload.Spendings ?? '',
                Impressions: action.payload.Impressions ?? '',
                Clicks: action.payload.Clicks ?? '',
                CTR: action.payload.CTR ?? '',
            });
        },
        deleteCampaign: (state, action) => {
            state.campaigns = state.campaigns.filter((campaign) => campaign.id !== action.payload.id);
        },
    },
});

export const { addCampaign, deleteCampaign } = campaignsSlice.actions;

export default campaignsSlice.reducer;
