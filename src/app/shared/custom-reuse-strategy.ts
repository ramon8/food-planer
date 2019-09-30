import {
    RouteReuseStrategy,
    DetachedRouteHandle,
    ActivatedRouteSnapshot
} from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

    routesToCache: string[] = ['gifs'];
    storedRouteHandles: Map<string, DetachedRouteHandle> = new Map<string, DetachedRouteHandle>();

    // Decides if the route should be stored
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldDetach', this.routesToCache.indexOf(route.routeConfig.path) > -1);
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    }

    // Store the information for the route we're destructing
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.log('HANDLE', handle);
        this.storedRouteHandles.set(route.routeConfig.path, handle);
        console.log('store', this.storedRouteHandles);
    }

    // Return true if we have a stored route object for the next route
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldAttach', this.storedRouteHandles.has(route.routeConfig.path));
        return this.storedRouteHandles.has(route.routeConfig.path);
    }

    // If we returned true in shouldAttach(), now return the actual route data for restoration
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.log('retrieve', this.storedRouteHandles.get(route.routeConfig.path));
        return this.storedRouteHandles.get(route.routeConfig.path);
    }

    // Reuse the route if we're going to and from the same route
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.log('shouldReuseRoute', future.routeConfig === curr.routeConfig);
        console.log('curr.routeConfig', curr.routeConfig);
        console.log('future.routeConfig', future.routeConfig);
        return future.routeConfig === curr.routeConfig;
    }
}
