import { NavigateOptions, To } from "react-router-dom";

export interface INavigate {
    goBack: () => void;
    goNext: () => void;
    navigate: (to: To, options?: NavigateOptions) => void;
}
