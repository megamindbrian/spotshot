export interface Job {

    assignee?: string;  // email address?  first name?  empty means job is still open

    applicants: Array<string>;

    owner: string;

    accountId: string;

    location: string;  // compatible with google maps nearby service

    locationObj: {  // for use on map display
        lat: number;

        lon: number;
    }

    description: string;

    // populated when job is complete
    fulfillment?: {
        time: Date;

        publicUrl: string; // dropbox or Amazon S3 bucket with unique hash

        quality: string; // simple description for approval, not EXIF!

        samples: Array<string>;  // sample urls, direct image links
    }

    downloaded?: Date;
}
