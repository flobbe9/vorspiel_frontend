/**
 * Copy of backend object, named the same.
 * 
 * @since 0.0.1
 */
export interface ApiExceptionFormat {
    status: number,
    error: string,
    message: string,
    path: string
}