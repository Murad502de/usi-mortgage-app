import {describe, expect, test} from '@jest/globals';
import WidgetTemplate from './script';
import { Widget } from './types/widget.types';

describe('Main Module', () => {

  const widget = new WidgetTemplate();

  test('construnctor() - возвращает экзампляр виджета', async () => {
    expect(widget).toBeInstanceOf(WidgetTemplate);
  });

  describe('init()', () => {
  	test('Aсинхронная функция', async () => {
    	expect(!!widget.callbacks.init && typeof widget.callbacks.init().then === 'function').toBe(true);
  	});
  	test('Виджет инициализируется', async () => {
    	expect(await widget.callbacks.init()).toBe(true);
  	});
  });

  describe('render()', () => {
  	test('Aсинхронная функция', async () => {
    	expect(!!widget.callbacks.render && typeof widget.callbacks.render().then === 'function').toBe(true);
  	});
  	test('Виджет отрисовывается', async () => {
    	expect(await widget.callbacks.render()).toBe(true);
  	});
  });

  describe('settings()', () => {
  	test('Aсинхронная функция', async () => {
    	expect(!!widget.callbacks.settings && typeof widget.callbacks.settings().then === 'function').toBe(true);
  	});
  	test('Виджет открывает меню настроек', async () => {
    	expect(await widget.callbacks.settings()).toBe(true);
  	});
  });

  describe('bind_actions()', () => {
  	test('Aсинхронная функция', async () => {
    	expect(!!widget.callbacks.bind_actions && typeof widget.callbacks.bind_actions().then === 'function').toBe(true);
  	});
  	test('Виджет bind-ит события', async () => {
    	expect(await widget.callbacks.bind_actions()).toBe(true);
  	});
  });


});