import { Participant } from 'src/shared/model/participant';
import { Thread } from 'src/shared/model/thread';
import { Message } from 'src/shared/model/message';

export interface StoreData {

    participants: { [key: number]: Participant};

    threads: {[key: number]: Thread};

    messages: {[key: number]: Message};
}