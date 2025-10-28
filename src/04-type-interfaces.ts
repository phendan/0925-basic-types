// Type Alias
type X = number;
type Y = number;

// Tuple Type
type Dimensions = [X, Y];

// Type Union
// type VideoTypes = {
//     extension: 'mp4' | 'webm' | 'avi';
//     mimeType: 'video/mp4' | 'video/webm' | 'video/x-msvideo';
// };
type VideoFormat =
    | { extension: 'mp4'; mimeType: 'video/mp4' }
    | { extension: 'webm'; mimeType: 'video/webm' }
    | { extension: 'avi'; mimeType: 'video/x-msvideo' };

const videoFormat: VideoFormat = { extension: 'mp4', mimeType: 'video/mp4' };

// Type Intersection
type Video = VideoFormat & {
    resolution: Dimensions;
    fileSize: number;
    download(): void;
};

const video: Video = {
    extension: 'avi',
    mimeType: 'video/x-msvideo',
    resolution: [200, 400],
    fileSize: 125,
    download: () => false
};

interface UserInterface {
    name: string;
}

// const x: UserInterface = {
//     name: ''
// }

export class User implements UserInterface {
    public name = 'Michael';
    public password = '';
}

const userOne = new User();
userOne.name;

type UserList = User[];

const userList: UserList = [userOne];
