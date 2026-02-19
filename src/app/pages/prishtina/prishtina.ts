import { Component } from '@angular/core';
import { ScheduleDay, ScheduleComponent } from '../../shared/schedule/schedule';
import { SpeakersComponent } from '../../shared/speakers/speakers';
import { Speaker } from '../../shared/speakers/speakers';

@Component({
  selector: 'app-prishtina',
  templateUrl: './prishtina.html',
  styleUrls: ['./prishtina.css'],
  imports: [ScheduleComponent, SpeakersComponent]
})
export class Prishtina {

  schedule: ScheduleDay[] = [
    {
      date: 'Friday, 16.01.26',
      events: [
        { time: '09:00', title: 'Registration & Welcome Coffee', speaker: '—', room: 'Lobby' },
        { time: '10:00', title: 'Opening Keynote: Innovation in the Western Balkans', speaker: 'Berine Rahimi', room: 'Hall A' },
        { time: '11:30', title: 'AI & Society: Student Paper Session I', speaker: 'Moderation: Christoph Bohrer', room: 'Room 1.01' },
        { time: '14:00', title: 'Workshop: Introduction to Data Storytelling', speaker: 'Mark Pschack', room: 'Room 2.02' },
        { time: '16:00', title: 'Networking Meet-up', speaker: '—', room: 'Café Area' }
      ]
    },
    {
      date: 'Saturday, 17.01.26',
      events: [
        { time: '09:00', title: 'Panel: Digital Transformation in the Balkans', speaker: 'Moderation: Artesa Qela', room: 'Hall B' },
        { time: '10:30', title: 'Case Studies: Urban Tech & Smart Cities', speaker: 'Multiple Speakers', room: 'Room 1.02' },
        { time: '13:00', title: 'Lunch Break', speaker: '—', room: 'Cafeteria' },
        { time: '14:30', title: 'Workshop: Cloud Systems for Public Innovation', speaker: 'Michiel Plekkenpol & Joern Soelken', room: 'Room 3.01' },
        { time: '16:30', title: 'Student Lightning Talks', speaker: 'Various Authors', room: 'Hall A' }
      ]
    },
    {
      date: 'Sunday, 18.01.26',
      events: [
        { time: '09:30', title: 'Breakfast Roundtable: Startups & Innovation', speaker: 'Local Founders', room: 'Lobby' },
        { time: '11:00', title: 'Tech Education: Student Paper Session II', speaker: 'Session Chair:Vivian Peterhans & Jannes john', room: 'Room 2.01' },
        { time: '13:00', title: 'Closing Keynote: Designing for Impact', speaker: 'Prof.Ali Eid & Prof. Pascal Hammar', room: 'Hall A' },
        { time: '14:30', title: 'Farewell & Informal Networking', speaker: '—', room: 'Café Area' }
      ]
    }
  ];
  speakers: Speaker[] = [
    {
      name: 'Berine Rahimi',
      title: 'Head of Tech Innovation · BC Group',
      description: 'Leads large-scale cloud and data projects and speaks about the future of enterprise tech.'
    },
    {
      name: 'Artesa Qela',
      title: 'AI Researcher · University of Prishtina',
      description: 'Focuses on trustworthy AI, evaluation of language models and human–AI collaboration.'
    },
    {
      name: 'Vivian Peterhans',
      title: 'Cloud Architect',
      description: 'Specialised in designing cloud-native systems and mentoring student development teams.'
    },
    {
      name: 'Michiel Plekkenpol',
      title: 'Professor of Data & Visualization',
      description: 'Works at the intersection of data analytics, visualization and human–computer interaction.'
    }
  ];

}
