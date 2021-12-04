import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { HeroJobAd } from './hero-job-ad.component';
import { HeroProfileAd } from './hero-profile-ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  private currentAdIndex = -1
  private interval = 0
  @Input() ads: AdItem[] = [
    new AdItem(HeroJobAd, {}),
    new AdItem(HeroProfileAd, {})
  ]
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective

  constructor() { }
  
  ngOnInit(): void {
    this.loadComponent()
    this.interval = window.setInterval(() => {
      this.loadComponent()
    }, 3000)
  }

  private loadComponent() {
    if (!this.ads.length)
      return
    this.currentAdIndex++
    if (this.currentAdIndex >= this.ads.length)
      this.currentAdIndex = 0

    const adItem = this.ads[this.currentAdIndex]

    const viewContainerRef = this.adHost.viewContainerRef
    viewContainerRef.clear()

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component)
    componentRef.instance.data = adItem.data
  }
  
  ngOnDestroy(): void {
    clearInterval(this.interval)
  }
  
}