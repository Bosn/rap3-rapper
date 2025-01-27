import type { RAPPER_TYPE } from '@rap-api/cli-core';
import type { Intf, IOutputFiles } from '@rap-api/cli-generation';

export interface ITemplateRes {
  filePath: string;
  template: () => string | Promise<string>;
}

export type TransformCustom = (
  interfaceList: Intf[],
  options: {
    writeTsFiles: () => Promise<void>;
    writeReactFiles: () => Promise<void>;
    writeDtoFiles: () => Promise<void>;
  },
) => IOutputFiles[];

export interface IRapperConfig {
  type: RAPPER_TYPE;
  rapperPath: string;
  rapUrl: string;
  projectId: number | string;
  token: string;
  baseUrl: string;
  apiUrl: string;
  transform?: TransformCustom;
  versionId?: number;
  enumType?: 'union' | 'enum';
}
