console.debug('WIDGET[MORTGAGE]::START[script.js]'); //DELETE

import { bind } from 'underscore';
// import { Application } from './types/global.types'; // Constants
// declare const APP: Application;

import { Widget, Settings, System, Statuses } from '@/types/widget.types';

import App from '@/app/main';

export default class WidgetTemplate implements Widget {
	system?(): System;
	get_settings?(): Settings;
	i18n?(name: string): string;
	set_status?(status: Statuses): void;
	get_version?(): string;

	self = this;

	callbacks = {
		render: bind(async (): Promise<boolean> => {
			console.debug('WidgetTemplate[Mortgage]::render'); //DELETE

			App.render();

			return true;
		}, this),

		init: bind(async (): Promise<boolean> => {
			console.debug('WidgetTemplate[Mortgage]::init'); //DELETE

			App.init(this);

			return true;
		}, this),

		bind_actions: bind(async (): Promise<boolean> => {
			console.debug('WidgetTemplate[Mortgage]::bind_actions'); //DELETE

			App.bindActions();

			return true;
		}, this),

		advancedSettings: bind(async (): Promise<boolean> => {
			console.debug('WidgetTemplate[Mortgage]::advancedSettings'); //DELETE

			App.advancedSettings(this);

			return true;
		}, this),

		settings: bind(async (): Promise<boolean> => {
			console.debug('WidgetTemplate[Mortgage]::settings'); //DELETE

			App.settings(this);

			return true;
		}, this),

		onSave: bind(async (): Promise<boolean> => {
			console.debug('WidgetTemplate[Mortgage]::onSave'); //DELETE

			App.onSave();

			return true;
		}, this),

		destroy: bind(async (): Promise<boolean> => {
			console.debug('WidgetTemplate[Mortgage]::destroy'); //DELETE

			App.destroy();

			return true;
		}, this),

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