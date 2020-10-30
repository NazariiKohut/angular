import {Component, OnInit} from '@angular/core';
import {DialogWindowComponent} from '../../shared/components/dialog-window/dialog-window.component';
import {MatDialog} from '@angular/material/dialog';


export interface LinkList {
  link: string;
  logo: string;
}

export interface AboutMe {
  title: string;
  content: string;
}

export interface Experience {
  expYear: string;
  companyName: string;
  description: string;
}

export interface Education {
  edYear: string;
  edDescription: string;
}

export interface Skills {
  skillName: string;
  skillWidth: number;
}

export interface Feedback {
  whiteBlocks: string;
  blackBlocks: string;
}

export interface Contacts {
  contactName: string;
  contactPhoto: string;
  contactLink: string;
}

export interface Message {
  title: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutMe: AboutMe;
  message: Message;
  linkList: LinkList[];
  myExperience: Experience[];
  education: Education[];
  skills: Skills[];
  feedback: Feedback[];
  contacts: Contacts[];

  constructor(public dialog: MatDialog) {
    this.linkList = [
      {link: 'About me', logo: 'assets/...'},
      {link: 'Education', logo: 'assets/...'},
      {link: 'Experience', logo: 'assets/...'},
      {link: 'Skills', logo: 'assets/...'},
      {link: 'Portfolio', logo: 'assets/...'},
      {link: 'Contacts', logo: 'assets/...'},
      {link: 'Feedback', logo: 'assets/...'},
    ];

    this.message = {
      title: 'This is test modal window',
      text: 'You can choose Ok or Cancel or close this window if you click somewhere outside'
    };

    this.aboutMe = {
      title: 'About me',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    };

    this.myExperience = [
      {
        companyName: 'Google',
        expYear: '1995',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        companyName: 'Twitter',
        expYear: '1996',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
    ];

    this.education = [
      {
        edYear: '1995',
        edDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
    ];

    this.skills = [
      {skillName: 'Java', skillWidth: 100},
      {skillName: 'Hybris', skillWidth: 85},
      {skillName: 'Js', skillWidth: 15},
      {skillName: 'Angular', skillWidth: 30},
      {skillName: 'SQL', skillWidth: 60},
    ];

    this.feedback = [
      {
        blackBlocks: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        whiteBlocks: '\n' +
          'https://www.lipsum.com/'
      },
      {
        blackBlocks: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', whiteBlocks: '\n' +
          'https://www.lipsum.com/'
      },
      {
        blackBlocks: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', whiteBlocks: '\n' +
          'https://www.lipsum.com/'
      },
      {
        blackBlocks: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', whiteBlocks: '\n' +
          'https://www.lipsum.com/'
      },
    ];

    this.contacts = [
      {contactName: 'Twitter', contactLink: 'www.twitter.com', contactPhoto: 'assets/...'},
      {contactName: 'Facebook', contactLink: 'www.facebook.com', contactPhoto: 'assets/...'},
      {contactName: 'Skype', contactLink: 'www.skype.com', contactPhoto: 'assets/...'},
    ];
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogWindowComponent, {data: this.message});
  }

}
