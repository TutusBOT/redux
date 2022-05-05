export type ApiList<T> = {
	/**
	 * Total number of resources available from API.
	 */
	count: number;
	/**
	 * The URL for the next page in the list.
	 */
	next: string;
	/**
	 * The URL for the previous page in the list.
	 */
	previous: string;
	/**
	 * A list of named API resources.
	 */
	results: T[];
};
