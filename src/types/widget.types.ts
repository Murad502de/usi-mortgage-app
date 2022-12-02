export interface CallbacksInterface {
	settings(
		$settings_body: HTMLElement,
		context: Record<string, never> | undefined
	): Promise<boolean>;
	bind_actions(): Promise<boolean>;
	init(): Promise<boolean>;
	render(): Promise<boolean>;
	dpSettings?(): Promise<boolean>;
	advancedSettings?(): Promise<boolean>;
	destroy?(): Promise<boolean>;
	onSalesbotDesignerSave?(): Promise<boolean>;
	contacts?: {
		selected(): Promise<boolean>,
	};
	leads?: {
		selected(): Promise<boolean>,
	};
	todo?: {
		selected(): Promise<boolean>,
	};
	onSave?(): Promise<boolean>;
	onAddAsSource?(
		pipelineId: number
	): Promise<boolean>;
}

/**
 * Области подключения
 * @enum
 */
export enum Areas {
	LeadCard = 'lcard',
	CustomerCard = 'cucard',
	ContactCard = 'ccard',
	CompanyCard = 'comcard',
	LeadsList = 'llist',
	CustomersList = 'culist',
	ContactsList = 'clist',
	TasksList = 'tlist',
	TasksLine = 'tline',
	TasksCalendar = 'tcalendar',
	Settings = 'settings',
	AdvancedSettings = 'advanced_settings',
	CardSDK = 'card_sdk',
	Catalogs = 'catalogs',
	DigitalPipeline = 'digital_pipeline',
	LeadSources = 'lead_sources',
	WhatsappModal = 'whatsapp_modal',
	Everywhere = 'everywhere'
}

export type System = {
	area: Areas,
	amohash: string,
	amouser: string,
	amouser_id: number;
	displayed_count: number;
	displayed_count_by_area: {
		salesbot_designer: number;
		widgetsSettings: number;
	};
	domain: string;
	server: string;
	subdomain: string;
};

export enum Activity {
	Active = 'Y',
	NotActive = 'N'
}

export enum Statuses {
	Install = 'install',
	Installed = 'installed',
	Error = 'error',
	NotConfigured = 'not_configured'
}


export type Settings = {
	active: Activity,
	category_code: string;
	id: number;
	path: string;
	images_path: string;
	oauth_client_uuid: string;
	status: Statuses,
	support: {
		email: string,
		link: string;
		name: string;
		privacy_policy: string;
	};
	version: string;
	widget_active: Activity,
	widget_code: string;
};

export interface Widget {
	callbacks: CallbacksInterface;
	system?(): System;
	get_settings?(): Settings;
	i18n?(name: string): string;
	set_settings?(settings: Record<string, string>): void;
	widgetsOverlay?(status: boolean): void;
	set_status?(status: Statuses): void;
	get_version?(): string;
	get_install_status?(): Statuses;

	self?: any;



	/**
	 * Подписанный запрос к стороннему сервису
	 * Дублирует $.ajax
	 * @see {@link https://www.amocrm.ru/developers/content/web_sdk/mechanics}
	 * @type {[type]}
	 */
	$authorizedAjax?<T = any>(settings: JQueryAjaxSettings): Promise<T>;
}


