import { createUseQuery } from '@rap-api/vue-query4';
import { IModels, http } from '../../rapper/http';

export const useQuery = createUseQuery<IModels>(http);

const { isError, isLoading, data } = useQuery('GET/user/list', { name: 'xxx' });
