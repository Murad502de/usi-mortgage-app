import { Model } from 'backbone';

/**
 * Язык акканта
 * @readonly
 * @enum {string}
 */
export enum Langs {
	Russian = 'ru',
	English = 'en',
	Spanish = 'es',
	Portuguese = 'pt',
}

/**
 * Окружение
 * @readonly
 * @enum {string}
 */
export enum Environment {
	Production = 'production'
}

/**
 * Формат времени
 * @readonly
 * @enum {number}
 */
export enum TimeFormat {
	European = 24,
	USA = 12
}

/**
 * Переменные аккаунта
 * @readonly
 * @enum {string}
 */
export enum Constants {
	IsKommo = 'is_kommo',
	Account = 'account',
	Environment = 'env',
	DigitalPipeline = 'dp',
	EntityNames = 'entity_names',
	AmoMail = 'amomail',
	AmocrmDrive = 'amocrm_drive',
	GoogleMapsApiKey = 'google_embed_maps_api_key',
	UnsortedToken = 'unsorted_token',
	amoForms = 'amoforms',
	Features = 'features',
	User = 'user',
	VersionBackend = 'version_backend',
	Version = 'version',
	UserRights = 'user_rights',
	Managers = 'managers',
	FreeUsers = 'free_users',
	Groups = 'groups',
	Limits = 'limits',
	FrontLoadStart = 'front-load-start',
	Notifications = 'notifications',
	SocialApp = 'social_apps',
	AmojoOrigins = 'amojo_origins',
	AmojoBots = 'amojo_bots',
	MainPipeline = 'main_pipeline',
	LeadsSoursesTypes = 'leads_sources_types',
	UnsortedStatuses = 'unsorted_statuses',
	UnsortedCategories = 'unsorted_categories',
	ShowOldTour = 'show_old_tour',
	AmoMessenger = 'amo_messenger',
	AmocrmWhatsapp = 'amocrm_whatsapp',
	CurrentBrand = 'current_brand',
	GlobalBrandName = 'global_brand_name',
	CurrentBrandDomain = 'current_brand_domain',
	Server = 'server',
	SessionToken = 'session_token',
	PeriodicityEnabled = 'periodicity_enabled',
	IpInfo = 'ip_info',
	LeftMenu = 'left_menu',
	GeoIpCountry= 'geoip_country',
}

export enum Entities {
	Leads = 'leads',
	Contacts = 'contacts',
	Customers = 'customers'
}

/**
 * @see {@link https://www.amocrm.ru/developers/content/web_sdk/js_sdk} - JS-SDK
 * @type {Application}
 */
export type Application = {
	data: {
		current_view: {
			$el: HTMLElement
		}
		current_card?: {
			id?: number,
			model?: Model
		}
	},
	sdk: {
		setCallingStatus(status: boolean): void,
		showUserStatus(): Record<string, never>
	},
	static_domain: string,
	static_build_domain: string,
	cdn_domain: string,
	need_cdn: string,
	environment: Environment,
	lang_id: Langs,
	system: {
		date: {
			ull: string,
			date: string,
			time: string,
			date_short: string,
			calendar: string,
			calendar_no_year: string
		},
		time: TimeFormat,
		timezone: string;
	}

	/**
	 * Получение констант площадки amoCRM/Kommo
	 * @param {Constants} name
	 * @see {@link https://www.amocrm.ru/developers/content/web_sdk/env_variables}
	 * @example
	 * const account = APP.constant<AccountData>(Constants.Account);
	 * @returns {T}
	 */
	constant: <T = never>(name: Constants, value?: never) => T,
	todo_types: Record<number, string>,
	note_types: Record<string, number>
	cf_types: Record<string, number>,
	getBaseEntity(): Entities,
	isCard(): boolean;

};

