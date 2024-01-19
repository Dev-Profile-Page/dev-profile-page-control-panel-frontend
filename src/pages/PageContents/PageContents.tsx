import * as React from 'react';

import styles from './PageContent.module.css';
import { RoundedButton, RoundedButtonColor, RoundedButtonSize } from '../../components/Buttons/RoudedButton';
import { Divider } from '../../components/Divider/Divider';
import { Github, ReactIcon, Stackoverflow, Twitter, TypeScriptIcon } from '../../components/Icons/Icons';
import { SizedBox } from '../../components/SizedBox/SizedBox';
import { PageContentSection } from '../../components/PageContentSection/PageContentSection';
import { TextInput } from '../../components/UserInputs/TextInput';
import { TextAreaInput } from '../../components/UserInputs/TextAreaInput';
import { MultiSelectInput, MultiSelectOption } from '../../components/UserInputs/MultiSelectInput';
import { ToggleInputCard } from '../../components/UserInputs/ToggleInputCard';
import { FileInput } from '../../components/UserInputs/FileInput';
import { Layout } from '../../layouts/Layout';
import { FormState, UseFormRegister, UseFormSetValue, UseFormTrigger, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export type PageContentsProps = {  };

export const TECHNOLOGIES: MultiSelectOption[] = [
  { value: 'react', label: 'React', id: 1, icon: ReactIcon },
  { value: 'typescript', label: 'TypeScript', id: 2, icon: TypeScriptIcon },
];

// export type PageContentsFormValues = {
//   displayName: string,
//   displayPicture: string,
//   bio: string,
//   city: string,
//   website: string,
//   // TODO: Add Cards and Technologies
// };

const schema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  displayPicture: z.string().min(1, 'Display picture is required'),
  bio: z.string().min(1, 'Bio is required'),
  city: z.string().min(1, 'City is required'),
  website: z.string().min(1, 'Website is required').url('Should be a valid URL'),
  // TODO: Add Cards and Technologies
});

export type PageContentsFormValues = z.infer<typeof schema>;

export type PageContentFormContextType = {
  register: UseFormRegister<PageContentsFormValues>,
  setValue: UseFormSetValue<PageContentsFormValues>,
  formState: FormState<PageContentsFormValues>,
  trigger: UseFormTrigger<PageContentsFormValues>,
};
export const PageContentsFormContext = React.createContext<PageContentFormContextType>({} as any);

export function PageContents({  }: PageContentsProps) {
  const { handleSubmit, control, register, setValue, formState, trigger, getValues } = useForm<PageContentsFormValues>({
    defaultValues: {
      displayName: '',
      displayPicture: '',
      bio: '',
      city: '',
      website: '',
    },
    resolver: zodResolver(schema),
  });
  const fileInputRef = React.createRef<HTMLInputElement>();

  const onSubmit = (data: PageContentsFormValues) => {
    console.log(data);
    console.log(typeof data.displayPicture)
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentValues = getValues();

    // ? NOTE: For some reason file input is not scrolled into view automatically if invalid
    if(!(currentValues.displayPicture)) {
      window.scrollTo({top: fileInputRef.current?.clientTop, behavior: 'smooth'})
    }

    const submitCaller = handleSubmit(onSubmit);
    submitCaller(e);
  }

  return (
    <Layout isLogoCenter>
      <div className={styles.page}>
        <div className={styles['page-title-container']}>
            <h1>Page Contents</h1>
        </div>

        <PageContentsFormContext.Provider value={{register, setValue, formState, trigger}}>
          <form className={styles['form']} onSubmit={submitHandler}>
            <PageContentSection title='General'>
              <TextInput
                label='Display Name'
                placeHolder='Type out or click autofill'
                control={control}
                name='displayName'
                rules={{required: true}}
              />
              <Divider />

              <FileInput
                ref={fileInputRef}
                control={control}
                name='displayPicture'
                label='Display picture'
                placeHolder='Click to select a picture or autofill'
                rules={{required: {message: 'Required', value: true}}}
              />
              <Divider />

              <TextAreaInput
                control={control}
                name='bio'
                label='Bio'
                placeHolder='Type out or click autofill'
              />
              <Divider />

              <TextInput
                label='City'
                placeHolder='Type out'
                control={control}
                name='city'
              />
              <Divider />

              <TextInput
                label='Website'
                placeHolder='Type out'
                control={control}
                name='website'
              />
              <Divider />

            </PageContentSection>

            <PageContentSection title='Cards'>
              <div className={styles['cards-container']}>
                <ToggleInputCard id='TWITTER' icon={Twitter} name='Twitter' isSelected={true} onChange={console.log} />
                <ToggleInputCard id='STACKOVERFLOW' icon={Stackoverflow} name='StackOverflow' isSelected={true} onChange={console.log} />
                <ToggleInputCard id='GITHUB' icon={Github} name='Github' isSelected={true} onChange={console.log} />
              </div>
            </PageContentSection>

            <Divider />

            <PageContentSection title='Technologies' subtitle='Select upto 5'>
              <MultiSelectInput label='' placeHolder='Type to search' options={TECHNOLOGIES} />
            </PageContentSection>

            <Divider />

            <div className={styles['save-button-container']}>
              <RoundedButton backgroundColor={RoundedButtonColor.GREEN} size={RoundedButtonSize.MEDIUM}>Save</RoundedButton>
            </div>
          </form>
        </PageContentsFormContext.Provider>
        <SizedBox width='auto' height={50} />
      </div>
    </Layout>
  );
}