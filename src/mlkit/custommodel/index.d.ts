import { MLKitCameraView, MLKitOptions, MLKitResult } from "../index";

export interface MLKitCustomModelResultValue {
  text: string;
  confidence: number;
}

export interface MLKitCustomModelResult extends MLKitResult {
  result: Array<MLKitCustomModelResultValue>;
}

export type MLKitCustomModelType = "FLOAT32" | "QUANT";

export interface TNSCustomModelInput {
  shape: Array<number>,
  type: MLKitCustomModelType
}

// see https://firebase.google.com/docs/ml-kit/ios/use-custom-models
export interface MLKitCustomModelOptions extends MLKitOptions {
  localModelFile?: string;
  labelsFile: string;
  /**
   * Default 5
   */
  maxResults?: number;
  modelInput: Array<TNSCustomModelInput>
  /**
   * Ignoring this for now as we deduct it from the model spec.
   */
  // modelOutput?: Array<{
  //   shape: Array<number>,
  //   type: MLKitCustomModelType
  // }>
  /**
   * Never got this working, so not supporting it for now.
   */
  // cloudModelName?: string;
  /**
   * Default false
   */
  // requireWifiForCloudModelDownload?: boolean;
}

export declare function useCustomModel(options: MLKitCustomModelOptions): Promise<MLKitCustomModelResult>;

export declare class MLKitCustomModel extends MLKitCameraView {
}
