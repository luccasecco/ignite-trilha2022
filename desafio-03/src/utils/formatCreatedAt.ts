import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

export function formatCreatedAt(created_at: string): string {
  return formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })
}
