import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItemGroup } from 'primeng/api/selectitemgroup';
import { ApiService, Bird, Owner, CreateBird } from 'src/app/Services/api.service';
import { OwnerService } from 'src/app/Services/owner.service';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { ICreateBirdRequest } from 'src/app/types/bird.types';

@Component({
  selector: 'c-bird-create',
  templateUrl: './bird-create.component.html',
  styleUrls: ['./bird-create.component.scss']
})
export class BirdCreateComponent implements OnInit {

  // local variables
  public birdForm: FormGroup;

  public GeslachtOptions: string[];
  public typeOfBirdOptions: string[];
  public ownerOptions: Owner[];
  public colorOptions: string[];
  public kanarieColors: string[];
  public goudvinkColors: string[];
  public distelvinkColors: string[];
  public sijzenColors: string[];
  public appelvinkColors: string[];
  public fischeriColors: string[];
  public barmsijzenColors: string[];
  public roodmusColors: string[];

  // grouped colors
  public groupedColors: SelectItemGroup[];

  public Kanarie: boolean = false;
  public Goudvink: boolean = false;
  public Distelvink: boolean = false;
  public Sijzen: boolean = false;
  public Appelvink: boolean = false;
  public Fischeri: boolean = false;
  public Barmsijzen: boolean = false;
  public Roodmus: boolean = false;

  constructor(
    private fb: FormBuilder,
    private birdFacade: BirdFacade,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.birdForm = this.fb.group({
      ringNumber: ['', Validators.required],
      gender: ['', Validators.required],
      birdType: ['', Validators.required],
      birthDate: ['', Validators.required],
      color: ['', Validators.required],
      cageNumber: ['', Validators.required],
      breederId: ['', Validators.required],
      OwnerId: ['', Validators.required],
      description: ['', Validators.required],
      isDead: ['', Validators.required],
      isChild: ['', Validators.required],
      isFather: ['', Validators.required],
      isMother: ['', Validators.required]
    });

    // local select fields init
    this.GeslachtOptions = ['Pop', 'Man'];
    this.typeOfBirdOptions = ['Kanarie', 'Goudvink', 'Distelvink', 'Sijzen', 'Appelvink', 'Fischeri', 'Barmsijzen', 'Mexicaanse Roodmus'];

    // grouped colors
    this.groupedColors = [
      {
        label: 'Kanarie', value: 'kanarie',
        items: [
          { label: 'Intensief', value: 'Intensief' },
          { label: 'Schimmel', value: 'Schimmel' },
          { label: 'Wit', value: 'Wit' },
          { label: 'Agaat Wit', value: 'Agaat Wit' },
          { label: 'Agaat Geel', value: 'Agaat Geel' },
          { label: 'Agaat Groen', value: 'Agaat Groen' },
          { label: 'Agaat Rood', value: 'Agaat Rood' }
        ]
      },
      {
        label: 'Goudvink', value: 'Goudvink',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' },
          { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
          { label: 'Wildkleur/Bruin Pastel', value: 'Wildkleur/Bruin Pastel' },
          { label: 'Bruin', value: 'Bruin' },
          { label: 'Bruin Pastel', value: 'Bruin Pastel' },
        ]
      },
      {
        label: 'Distelvink', value: 'Distelvink',
        items: [
          { label: 'Bruin', value: 'Bruin' },
          { label: 'Agaat', value: 'Agaat' },
          { label: 'Agaat Bruin', value: 'Agaat Bruin' },
          { label: 'Agaat Pastel', value: 'Agaat Pastel' },
          { label: 'Isabel', value: 'Isabel' },
          { label: 'Satinet', value: 'Satinet' },
          { label: 'Eumo', value: 'Eumo' },
          { label: 'Pastel', value: 'Pastel' },
          { label: 'Bruin Pastel', value: 'Bruin Pastel' },
          { label: 'Witkop', value: 'Witkop' },
        ]
      },
      {
        label: 'Sijzen', value: 'Sijzen',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' },
          { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
          { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
          { label: 'Bruin', value: 'Bruin' },
          { label: 'Ivoor', value: 'Ivoor' },
          { label: 'Zwartkop', value: 'Zwartkop' }
        ]
      },
      {
        label: 'Appelvink', value: 'Appelvink',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' }
        ]
      },
      {
        label: 'Fischeri', value: 'Fischeri',
        items: [
          { label: 'Groen', value: 'Groen' },
          { label: 'Blauw', value: 'Blauw' },
          { label: 'Lutino', value: 'Lutino' },
          { label: 'Paars', value: 'Paars' },
          { label: 'Wit', value: 'Wit' }
        ]
      },
      {
        label: 'Barmsijzen', value: 'Barmsijzen',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' },
          { label: 'Wildkleur/Satinet', value: 'Wildkleur/Satinet' },
          { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
          { label: 'Satinet', value: 'Satinet' },
          { label: 'Ivoor', value: 'Ivoor' }
        ]
      },
      {
        label: 'Roodmus', value: 'Mexicaanse Roodmus',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' }
        ]
      },
    ];
  }

  public onSubmit() {
    
    const request: ICreateBirdRequest = {
      ringNumber: this.birdForm.get('').value,
      gender: this.birdForm.get('').value,
      birdType: this.birdForm.get('').value,
      birthDate: this.birdForm.get('').value,
      color: this.birdForm.get('').value,
      cageNumber: this.birdForm.get('').value,
      breederId: this.birdForm.get('').value,
      ownerId: this.birdForm.get('').value,
      description: this.birdForm.get('').value,
      isDead: this.birdForm.get('').value,
      isChild: this.birdForm.get('').value,
    };

    this.birdFacade.createBird(request);
  }

  public goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
