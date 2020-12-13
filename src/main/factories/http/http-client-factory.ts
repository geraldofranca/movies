import { ClickHttpClient } from '@/infra/http/http-client'

export const makeClickHttpClient = (): ClickHttpClient => new ClickHttpClient()
