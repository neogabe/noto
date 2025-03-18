import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>Nenhuma nota criada</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notesMock.map((note) => (
        <NotePreview key={String(note.title)} {...{ ...note, title: String(note.title) }} />
      ))}
    </ul>
  )
}
