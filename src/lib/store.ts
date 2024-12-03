import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
	accessToken: string;
	setAccessToken: (accessToken: string) => void;
}

const useTokenStore = create<State>()(
	persist(
		(set) => ({
			accessToken: "",
			setAccessToken: (accessToken: string) => set({ accessToken }),
		}),
		{
			name: "spotify-auth",
		}
	)
);

export { useTokenStore };
