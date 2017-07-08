export interface IContact {
        name: string;
        company: string;
        favorite: boolean;
        smallImageURL: string;
        largeImageURL: string;
        email: string;
        website: string;
        birthdate: string;
        phone: {
            work: string,
            home: string,
            mobile: string
        };
        address: {
            street: string,
            city: string,
            state: string,
            country: string,
            zip: string,
            latitude: number,
            longitude: number
        };
    }
