import {singleton} from 'tsyringe';
import axios from 'axios';
@singleton()
export class StaticRequestService {
    private cache = new Map<string, unknown>();

    request(url: string): Promise<unknown> {
        return new Promise((resolve, reject) => {
            const cache = this.cache.get(url);

            if (cache) {
                return resolve(cache);
            }

            return axios
                .get(url)
                .then(response => {
                    this.cache.set(url, response);
                    return resolve(response);
                })
                .catch(error => {
                    return reject(error);
                });
        });
    }
}
