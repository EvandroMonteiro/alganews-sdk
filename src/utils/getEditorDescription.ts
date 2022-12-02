import formatDistance from "date-fns/formatDistance";
import ptBR from "date-fns/locale/pt-BR";

export default function getEditorDescription(editorCreationDate: Date): string {
  const distance: string = formatDistance(editorCreationDate, new Date(), {
    locale: ptBR,
  });

  return `Editor há ${distance}`;
}
