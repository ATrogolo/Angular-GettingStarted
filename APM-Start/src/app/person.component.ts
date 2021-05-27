import { Component, OnInit } from '@angular/core';

interface Car {
  manufacturer: string
  logoUrl: string
  name: string
  year: number
}

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  // Fields
  firstName = 'Andrea';
  lastName = 'Trogolo';
  showCity = true;
  City = 'Torino'
  showCarsLogo = true;
  cars: Car[] = [{
    manufacturer: 'Renault',
    logoUrl: 'https://logovector.net/wp-content/uploads/2014/04/156341-renault-12-logo-195x195.gif',
    name: 'Laguna',
    year: 2000,
  },
  {
    manufacturer: 'Ford',
    logoUrl: 'http://www.logotypes101.com/logos/388/6868A34DD2526B7A8656B9486C95484E/ford_01.png',
    name: 'Fiesta',
    year: 1997
  },
  {
    manufacturer: 'Fiat',
    logoUrl: 'https://i.ebayimg.com/images/g/vQAAAOSwrMdbbBGS/s-l400.jpg',
    name: 'Tipo',
    year: 2019
  }]

  ngOnInit(): void {
    console.log('onInit triggered')
  }

  // Methods
  getAge = () => {
    const tokens = new Date().toISOString().split('T')[0].split('-')
    const year = parseInt(tokens[0])
    const month = parseInt(tokens[1])
    const day = parseInt(tokens[2])

    const years = year - 1988

    return (month >= 11 && day >= 10) ? years : (years - 1)
  }

  toggleCarsButtons(): void {
    this.showCarsLogo = !this.showCarsLogo
  }
}
