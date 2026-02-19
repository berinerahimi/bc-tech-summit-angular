import { Component } from '@angular/core';
import { ScheduleDay, ScheduleComponent } from '../../shared/schedule/schedule';
import { SpeakersComponent } from '../../shared/speakers/speakers';
import { Speaker } from '../../shared/speakers/speakers';


@Component({
  selector: 'app-munich',
  templateUrl: './munich.html',
  styleUrl: './munich.css',
  imports: [ScheduleComponent, SpeakersComponent]
})

export class Munich {
  
  schedule: ScheduleDay[] = [
  {
    date: 'Friday, 23.01.26',
    events: [
      { time: '09:00', title: 'Registration & Welcome Coffee', speaker: '—', room: 'Foyer' },
      { time: '10:00', title: 'Opening Keynote: Europe’s Role in the AI Revolution', speaker: 'Moderation: Berine Rahimi', room: 'Auditorium A' },
      { time: '11:15', title: 'Industry 4.0: Smart Manufacturing Panel', speaker: 'Dr. Ali Eid', room: 'Room E1' },
      { time: '13:00', title: 'Lunch Break', speaker: '—', room: 'Cafeteria' },
      { time: '14:30', title: 'Workshop: Practical Machine Learning with TensorFlow', speaker: 'Vivian Peterhans', room: 'Lab 2.04' }
    ]
  },
  {
    date: 'Saturday, 24.01.26',
    events: [
      { time: '09:00', title: 'Data Privacy & Ethics in AI', speaker: 'Prof.Artesa Qela', room: 'Auditorium B' },
      { time: '10:30', title: 'Case Studies: Autonomous Systems in Mobility', speaker: 'Multiple Experts', room: 'Room E2' },
      { time: '12:30', title: 'Lunch Break', speaker: '—', room: 'Cafeteria' },
      { time: '14:00', title: 'Workshop: Building Scalable Cloud Architectures', speaker: 'Michiel Plekkenpol', room: 'Lab 3.01' },
      { time: '16:00', title: 'Student Research Session: Emerging Tech', speaker: 'Session Chair: Mark Pschack', room: 'Auditorium A' }
    ]
  },
  {
    date: 'Sunday, 25.01.26',
    events: [
      { time: '09:30', title: 'Breakfast Networking: Women in Tech Europe', speaker: 'Guest Speakers', room: 'Foyer' },
      { time: '11:00', title: 'Cybersecurity & Digital Defense Panel', speaker: 'Moderation: Dr. Joern Soelken', room: 'Room E3' },
      { time: '13:00', title: 'Closing Keynote: The Future of Tech Innovation', speaker: 'Dr. Pascal Hammar', room: 'Auditorium A' },
      { time: '14:30', title: 'Farewell & Informal Networking', speaker: '—', room: 'Exhibition Hall' }
    ]
  }
];

speakers: Speaker[] = [
    {
      name: 'Christoph Bohrer',
      title: 'Head of Tech Innovation · BC Group',
      description: 'Leads large-scale cloud and data projects and speaks about the future of enterprise tech.'
    },
    {
      name: 'Mark Pschack',
      title: 'AI Researcher · University of Cologne',
      description: 'Focuses on trustworthy AI, evaluation of language models and human–AI collaboration.'
    },
    {
      name: 'Jannes John',
      title: 'Cloud Architect',
      description: 'Specialised in designing cloud-native systems and mentoring student development teams.'
    },
    {
      name: 'Prof. Joern Soelken',
      title: 'Professor of Data & Visualization',
      description: 'Works at the intersection of data analytics, visualization and human–computer interaction.'
    }
  ];

}
