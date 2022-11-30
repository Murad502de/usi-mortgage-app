console.debug('WIDGET[MORTGAGE]::START[script.js]'); //DELETE

// import { bind } from 'underscore';
// import { Application } from './types/global.types'; // Constants
// declare const APP: Application;

import { Widget, Settings, System, Statuses } from '@/types/widget.types';
import App from '@app/main';

export default class WidgetTemplate implements Widget {
	system?(): System;
	get_settings?(): Settings;
	i18n?(name: string): string;
	set_status?(status: Statuses): void;
	get_version?(): string;

	callbacks = {
		async render(): Promise<boolean> {
			console.debug('WidgetTemplate[Mortgage]::render'); //DELETE

			App.render();

			return true;
		},
		async init(): Promise<boolean> {
			console.debug('WidgetTemplate[Mortgage]::init'); //DELETE

			App.init();

			return true;
		},
		async bind_actions(): Promise<boolean> {
			console.debug('WidgetTemplate[Mortgage]::bind_actions'); //DELETE

			App.bindActions();

			return true;
		},
		async advancedSettings(): Promise<boolean> {
			console.debug('WidgetTemplate[Mortgage]::advancedSettings'); //DELETE

			App.advancedSettings();

			return true;
		},
		async settings(): Promise<boolean> {
			console.debug('WidgetTemplate[Mortgage]::settings'); //DELETE

			App.settings();

			return true;
		},
		async onSave(): Promise<boolean> {
			console.debug('WidgetTemplate[Mortgage]::onSave'); //DELETE

			App.onSave();

			return true;
		},
		async destroy(): Promise<boolean> {
			console.debug('WidgetTemplate[Mortgage]::destroy'); //DELETE

			App.destroy();

			return true;
		},
		contacts: {
			async selected(): Promise<boolean> {
				console.debug('WidgetTemplate[Mortgage]::selected'); //DELETE

				return true;
			},
		},
		leads: {
			async selected(): Promise<boolean> {
				console.debug('WidgetTemplate[Mortgage]::selected'); //DELETE

				return true;
			},
		},
		todo: {
			async selected(): Promise<boolean> {
				console.debug('WidgetTemplate[Mortgage]::selected'); //DELETE

				return true;
			},
		},
	};

	constructor() {
		return this;
	}
}