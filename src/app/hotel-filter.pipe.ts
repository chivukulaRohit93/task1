import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(hotels: any, searchterm: string):any {
    if(!hotels || !searchterm){
      return hotels;
    }

    return hotels.filter(hotel => hotel.Name.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);
  }

}
