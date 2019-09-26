import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GifDetailComponent } from '../gif-detail/gif-detail.component';

@Component({
    selector: 'app-modal-container',
    template: ''
})
export class ModalContainerComponent implements OnInit, OnDestroy {

    destroy: Subject<any> = new Subject<any>();
    currentDialog: NgbModalRef = null;

    constructor(
        private modalService: NgbModal,
        route: ActivatedRoute,
        router: Router
    ) {
        route.params.pipe(
            takeUntil(this.destroy)
        )
            .subscribe(
                (params) => {

                    // When router navigates on this component is takes the params and opens up the photo detail modal
                    console.log('params', params);
                    this.currentDialog = this.modalService.open(GifDetailComponent, { centered: true });
                    this.currentDialog.componentInstance.gifId = params.id;

                    // Go back to home page after the modal is closed
                    this.currentDialog.result
                        .then(
                            () => {
                                router.navigateByUrl('/');
                                console.log('FLAG 1');
                            }, () => {
                                console.log('FLAG 2');
                                router.navigateByUrl('/');
                            }
                        );
                }
            );
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.destroy.next();
    }

}
