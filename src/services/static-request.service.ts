import {singleton} from 'tsyringe';
import axios from 'axios';
@singleton()
export class StaticRequestService {
    private cache = new Map<string, Promise<string>>();

    // request(url: string): Promise<string> {
    //     // get(url).
    // }
}
