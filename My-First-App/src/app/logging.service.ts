export class LoggingService {
    logStatusCHanges(status: string) {
        console.log('A server changed, new status: ' + status);
    }
}