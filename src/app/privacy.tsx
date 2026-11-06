import { LegalDocView } from '../components/LegalDocView';
import { PRIVACY_POLICY } from '../data/legal';

export default function Privacy() {
  return <LegalDocView doc={PRIVACY_POLICY} />;
}
