// support NodeJS modules without type definitions
// declare module '*';

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare const ENV: string;
declare const System: SystemJS;

interface SystemJS {
	import(path?: string): Promise<any>;
}

interface GlobalEnvironment {
	ENV: string;
	SystemJS: SystemJS;
	System: SystemJS;
}

interface ErrorStackTraceLimit {
	stackTraceLimit: number;
}

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
	id: string;
}
